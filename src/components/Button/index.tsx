export type ButtonProps = {
	children: string
	disabled?: boolean
	onClick: () => void
	ariaLabel?: string
}

const Button = ({
	children,
	disabled = false,
	onClick,
	ariaLabel = '',
}: ButtonProps) => {
	return (
		<button
			type='button'
			className={`h-12 rounded px-4 font-bold text-neutral-500
      ${
				disabled
					? 'bg-[#0D686D] text-neutral-400'
					: 'bg-primary transition duration-300 ease-out hover:bg-neutral-200'
			}`}
			disabled={disabled}
			onClick={onClick}
			aria-label={ariaLabel}
		>
			{children.toUpperCase()}
		</button>
	)
}

export default Button
