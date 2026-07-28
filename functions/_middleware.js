// Consolidates bestchoicerepair.com -> www.bestchoicerepair.com with a real
// 301, not just the canonical <link> tag in Layout.astro. Without this,
// both hosts serve identical content directly (confirmed via curl — both
// return 200), so Google crawls both and only defers to the canonical via
// on-page hints instead of never reaching the duplicate at all. Runs before
// static asset serving, so it also catches direct asset/API-shaped
// requests, not just page loads.
export async function onRequest(context) {
  const url = new URL(context.request.url);
  if (url.hostname === 'bestchoicerepair.com') {
    url.hostname = 'www.bestchoicerepair.com';
    return Response.redirect(url.toString(), 301);
  }
  return context.next();
}
