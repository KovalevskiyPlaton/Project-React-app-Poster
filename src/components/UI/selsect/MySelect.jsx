//Это приложение - реализация видеоурока на YouTube канале Ulbi TV ссылка: https://www.youtube.com/watch?v=GNrdg3PzpJQ
import React from "react";

const MySelect =({options, defaultValue, value, onChange})=>{
    return (
        
            <select value={value}
            onChange = {event => onChange(event.target.value)}
            >
                <option  disabled value=''>{defaultValue}</option>
                {options.map (option=>
                    <option key={option.value} value={option.value}>
                        {option.name}
                    </option>
                )}
            </select>
    )
}

export default MySelect
