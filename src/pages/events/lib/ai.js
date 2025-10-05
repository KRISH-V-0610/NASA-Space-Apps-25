export async function askAI(prompt, context = {}) {
  await new Promise(r => setTimeout(r, 600))

  const { event } = context
  const heading = event ? `${event.title} (${event.type}, ${event.year})` : 'Selected Year Overview'

  const canned = [
    `Here’s a concise synthesis for ${heading}. Satellite indicators suggest the observed signals are consistent with known seasonal and regional patterns.`,
    'Key factors likely include recent weather anomalies, land use changes, and topographic influences.',
    'Confidence is medium given the spatial scale and proxy nature of indicators.',
  ]

  const answer = `Q: ${prompt}\n\nA: ${canned.join(' ')}`
  return { answer }
}

