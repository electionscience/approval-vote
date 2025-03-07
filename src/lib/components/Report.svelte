<script lang="ts">
  import { base } from '$app/paths'

  import type {
    IContestReport,
    Allocatee,
    ICandidate,
  } from '$lib/server/report_types'
  import VoteCounts from './report_components/VoteCounts.svelte'

  import { setContext } from 'svelte'

  interface Props {
    report: IContestReport;
  }

  let { report }: Props = $props();

  function getCandidate(cid: Allocatee): ICandidate {
    return report.candidates[cid]
  }

  function getWinners(candidates: ICandidate[]): ICandidate[] {
    if (candidates.length == 1) {
      return [report.candidates[0]]
    }

    return candidates.filter(candidate => candidate.winner === true)
  }

  setContext('candidates', {
    getCandidate,
  })

  function formatDate(dateStr: string): string {
    let date = new Date(dateStr)
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]

    return `${
      months[date.getUTCMonth()]
    } ${date.getUTCDate()}, ${date.getUTCFullYear()}`
  }

  const sumVotes = report.candidates
    .map((candidate) => candidate.votes)
    .reduce((a, b) => a + b)

  const numCandidates = report.candidates.filter(
    (candidate) => !candidate.writeIn
  ).length
</script>

<div class="row">
  <p class="description"></p>
  <div class="electionHeader">
    <h1>
      <a href="{base}/">approval.vote</a>
      //
      <strong>{report.info.jurisdictionName}</strong>
      {report.info.officeName}
    </h1>
  </div>
</div>

<div class="row">
  <div class="leftCol">
    <p>
      The
      {#if report.info.website}
        <a href={report.info.website}>
          {report.info.jurisdictionName}
          {report.info.electionName}
        </a>
      {:else}{report.info.jurisdictionName} {report.info.electionName}{/if}
      was held on
      <strong>{formatDate(report.info.date)}</strong>.
      {#each getWinners(report.candidates) as winner, i}
        {#if i == 0}
          <strong>{winner.name}</strong>
        {:else if i == report.winners.length - 1}
          , and
          <strong>{winner.name}</strong>
        {:else}
          ,
          <strong>{winner.name}</strong>
        {/if}
      {/each}

      {#if report.winners.length == 1}
        was the winner out of
      {:else}were the winners out of{/if}
      <strong>{numCandidates}</strong>
      {#if numCandidates == 1}candidate{:else}candidates{/if}. {#if report.info.notes}{report
          .info.notes}{/if}
    </p>
    <p>
      There were <strong>{report.ballotCount.toLocaleString()}</strong> ballots,
      with <strong>{sumVotes.toLocaleString()}</strong> approvals. There was an
      average of <strong>{(sumVotes / report.ballotCount).toFixed(1)}</strong> approvals
      per ballot in this race.
    </p>
  </div>
  <div class="rightCol">
    <VoteCounts {report} />
  </div>
</div>
