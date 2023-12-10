 import { nanoid } from 'nanoid'
 
const InputSelect = ({ items }) => {
    return (
        <select>
            {items.map(item => (
                 <option key={nanoid()} value={item}>{item}</option>
      ))}
        </select>
    )
};
 export default InputSelect;