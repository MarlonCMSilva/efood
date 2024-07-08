import { ButtonContainer, ButtonLink } from './styles'

type Props = {
  type: 'button' | 'link' | 'submit'
  title: string
  to?: string
  onClick?: () => void
  children?: string
  disabled?: boolean
}

const Button = ({ type, title, to, onClick, children, disabled }: Props) => {
  if (type === 'button' || type === 'submit') {
    return (
      <ButtonContainer
        type="button"
        title={title}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </ButtonContainer>
    )
  }
  return (
    <ButtonLink to={to as string} title={title} onClick={onClick}>
      {children}
    </ButtonLink>
  )
}

export default Button
