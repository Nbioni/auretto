import { useMediaQuery } from 'react-responsive'

export function useResponsive() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1024px)'
  })
  const isTablet = useMediaQuery({ query: '(min-width: 768px) and (max-width: 1023px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  return { isDesktopOrLaptop, isTablet, isMobile }
}
