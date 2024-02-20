import { forwardRef } from 'react'

const Field = 
	forwardRef(({ error, type = 'text', style, ...rest }, ref) => {
		return (
			<div className='relative mb-6 block' style={style}>
				<input className='w-full text-white placeholder-white/30 border-0 bg-transparent border-white border-b-[1px] outline-none focus:ring-0 focus:border-btn transition-color duration-300' type={type} ref={ref} {...rest} />
				{error && <div className='absolute left-0 -bottom-5 text-red-700 font-light text-[0.85rem]'>{error.message}</div>}
			</div>
		)
	})

Field.displayName = 'Field'

export default Field
