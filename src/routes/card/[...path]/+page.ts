/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  const reports = import.meta.glob("$lib/reports/**/report.json", {
    eager: true,
  });
  const report = reports[`$lib/reports/${params.path}/report.json`];
  return { report: report, path: params.path };
}
