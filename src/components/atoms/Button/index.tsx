import React, { useMemo } from 'react'
import clsx from 'clsx'
import { useTranslation } from 'next-i18next'
import styles from './index.module.css'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  linkTo?: string
  buttonType?: 'link' | 'text' | 'ghost' | 'default' | 'primary' | 'dashed'
  rounded?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props: ButtonProps, ref) => {
  const { buttonType = 'primary', title, className, children, linkTo, ...rest } = props
  const { t } = useTranslation()
  const rounded = rest.rounded || false

  const component = useMemo(() => {
    let component = children
    if (typeof children === 'string' || title) {
      component = <span>{children || title}</span>
    }

    if (linkTo) {
      return (
        <a href={linkTo} className={styles.link_tag}>
          {component}
        </a>
      )
    }
    return component
  }, [linkTo, children, title])

  return rounded ? (
    <button ref={ref} className={clsx(className, styles.button, styles[buttonType], styles.rounded)} {...rest}>
      {component}
    </button>
  ) : (
    <button ref={ref} className={clsx(className, styles.button, styles[buttonType])} {...rest}>
      {component}
    </button>
  )
})

export default Button