const escape = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** Tiny formatter for copy strings: **bold** and [text](url). Everything else is escaped. */
export function rich(input: string): string {
  return escape(input)
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\[(.+?)\]\((https?:\/\/[^\s)]+|\/[^\s)]*)\)/g, (_m, text, url) => {
      const external = url.startsWith('http');
      return `<a href="${url}"${external ? ' rel="noopener" target="_blank"' : ''}>${text}</a>`;
    });
}

/** Plain text version, for meta tags and JSON-LD. */
export const plain = (input: string) => input.replace(/\*\*(.+?)\*\*/g, '$1').replace(/\[(.+?)\]\((.+?)\)/g, '$1');
