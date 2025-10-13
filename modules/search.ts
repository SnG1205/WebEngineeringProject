export const searchHighlighter = (): void => {
  document
    .querySelector('.search')
    .addEventListener('submit', (e: SubmitEvent) => {
      e.preventDefault();

      document.querySelectorAll('.highlight').forEach(function (el) {
        const parent = el.parentNode;
        parent.replaceChild(document.createTextNode(el.textContent), el);
        parent.normalize();
      });

      const target = e.target as HTMLFormElement;
      const searchKey: string = target.q.value.trim();
      if (searchKey === '') return;

      const regex = new RegExp(
        '(' + searchKey.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')',
        'gi'
      );

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
            node.replaceWith.apply(node, ...span.childNodes);
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

      document.querySelectorAll('article').forEach((article) => {
        walk(article);
      });
    });
};
