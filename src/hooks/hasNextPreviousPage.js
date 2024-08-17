import { useMemo } from 'react';

const usePageNavigation = (pages, projectId) => {
  const currentIndex = useMemo(() => {
    return pages.findIndex((page) => {
      return String(page.id) === String(projectId);
    });
  }, [pages, projectId]);

  const hasPrevious = currentIndex > 0;
  const hasNext = currentIndex < pages.length - 1;

  const previousPage = hasPrevious ? pages[currentIndex - 1] : null;
  const nextPage = hasNext ? pages[currentIndex + 1] : null;

  return {
    hasPrevious,
    hasNext,
    prevId: previousPage?.id,
    nextId: nextPage?.id,
  };
};

export default usePageNavigation;
