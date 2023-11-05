import { useState } from 'react';

function useSelectedOptions(initialOptions = []) {
  const [selectedOptions, setSelectedOptions] = useState(initialOptions);

  const handleOptionSelect = (option) => {
    if (selectedOptions.includes(option)) {
      const updatedOptions = selectedOptions.filter((item) => item !== option);
      setSelectedOptions(updatedOptions);
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return { selectedOptions, handleOptionSelect };
}

export default useSelectedOptions;
