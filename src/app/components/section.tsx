import { ComponentProps } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const section = tv({
  base: 'relative',
  variants: {

  },
  defaultVariants: {

  }
})

export type SectionProps = ComponentProps<'section'> & VariantProps<typeof section> & {}

export default function Section(props: SectionProps) {
  const { className } = props
  return <section className={section({ className })} {...props}>
    {props.children}
  </section>
}