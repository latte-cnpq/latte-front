import Head from 'next/head';
import { useState } from 'react';
import Select from '@/components/Select';

export default function Grafos() {
  const options = [
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
    { value: 'orange', label: 'Orange' },
    { value: 'grape', label: 'Grape' },
  ];

  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <>
      <Head>
        <title>Grafos</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          <Select
            id="fruit-select"
            label="Select a fruit:"
            options={options}
            value={selectedOption}
            onChange={handleChange}
            placeholder="Select a fruit"
            allowClear
            allowSearch
            allowSort
          />
        </div>
      </main>
    </>
  );
}
