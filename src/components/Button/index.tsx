export type ButtonProps = {
	children: string
	disabled?: boolean
	onClick: () => void
}

const Button = ({ children, disabled = false, onClick }: ButtonProps) => {
	return (
		<button
			type='button'
			className={`h-12 rounded px-4 font-bold text-neutral-500
      ${
				disabled
					? 'bg-[#0D686D] text-neutral-400'
					: 'bg-primary  hover:bg-neutral-200'
			}`}
			disabled={disabled}
			onClick={onClick}
		>
			{children.toUpperCase()}
		</button>
	)
}

export default Button
