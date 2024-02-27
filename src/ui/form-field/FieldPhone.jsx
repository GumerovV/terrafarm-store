import { forwardRef, useState } from 'react'
import InputMask from 'react-input-mask';

const FieldPhone = forwardRef(({ error, type = 'text', style, onChange,onBlur,defaultValue, ...rest }, ref) => {
    const [isIncomplete, setIsIncomplete] = useState(false);
    const [phone, setPhone] = useState(defaultValue || '');
    const handleChange = (event) => {
        setPhone(event.target.value);
        onChange(event);
    }

    const handleBlur = (event) => {
        if (event.target.value.includes('_')) {
            setIsIncomplete(true);
            event.target.value = '';
        }
        else{
            setIsIncomplete(false);
        }
        onBlur(event);
    }

    return (
        <div className='relative mb-6 block' style={style}>
            <InputMask mask="+7-(999)-999-99-99" maskChar="_" onChange={handleChange} onBlur={handleBlur} value={phone}>
                {() => (
                    <input className='w-full text-white placeholder-white/30 border-0 bg-transparent border-white border-b-[1px] outline-none focus:ring-0 focus:border-btn transition-color duration-300' type={type} ref={ref} {...rest} />
                )}
            </InputMask>
            {isIncomplete && <div className='absolute left-0 -bottom-5 text-red-700 font-light text-[0.85rem]'>Заполните поле полностью</div>}
            {error && !isIncomplete &&<div className='absolute left-0 -bottom-5 text-red-700 font-light text-[0.85rem]'>{error.message}</div>}
        </div>
    )
})
FieldPhone.displayName = 'FieldPhone'

export default FieldPhone