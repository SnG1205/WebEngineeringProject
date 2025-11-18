export const searchHighlighter = (searchQuery: string): void => {
  clearHighlighters();
  if (searchQuery === '') return;

  const regex = new RegExp(
    '(' + searchQuery.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')',
    'gi'
  );

  document.querySelectorAll('article').forEach((article) => {
    walk(article);
  });

  function walk(node: HTMLElement): void {
    if (node.nodeType === 3) {
      // Text node
      const match = node.nodeValue.match(regex);
      if (match !== null) {
        const span = document.createElement('span');
        span.innerHTML = node.nodeValue.replace(
          regex,
          '<mark class="highlight">$1</mark>'
        );
        node.replaceWith(span);
      }
    } else if (
      node.nodeType === 1 &&
      node.tagName !== 'SCRIPT' &&
      node.tagName !== 'STYLE' &&
      node.tagName !== 'FORM'
    ) {
      node.childNodes.forEach(walk);
    }
  }
};

const clearHighlighters = (): void => {
  document.querySelectorAll('.highlight').forEach(function (el) {
    const parent = el.parentNode;
    parent.replaceChild(document.createTextNode(el.textContent), el);
    parent.normalize();
  });
};
