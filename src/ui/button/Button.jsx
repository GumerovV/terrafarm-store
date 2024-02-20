import React from "react"
import classNames from "classnames"

const Button = ({
	children,
	className,
	isLoading,
	...rest
}) => {
	return (
		<button className={classNames('flex justify-center p-2 mt-4 mb-2 text-white text-center bg-btnBlack rounded-full opacity-90 hover:opacity-100 transition-all duration-300 cursor-pointer', className)} {...rest}>
			{children}
		</button>
	)
}

export default Button
