export interface SvgrProps {
  width?: number
  height?: number
  className?: string
}

export function mergeSvgrProps(props: SvgrProps) {
  const defaultProps: SvgrProps = {
    width: 28,
    height: 28,
    className: "fill-auretto",
  }
  return { ...defaultProps, ...props }
}

