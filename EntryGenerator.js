import React from "react";

/* function EntryGenerator({ totalVol }) {
  // Implement your entry generation logic here based on the totalVol.
  // This can involve using algorithms to find combinations of entries.

  // For a basic example, let's just display the total value.
  return (
    <div>
      <h2>Generated Entries:</h2>
      <p>Total Value: {totalVol}</p>
    </div>
  );
} */

function EntryGenerator({ totalVol }) {
  const generateEntries = (totalVol, numberOfEntries) => {
    const entries = [];
    let remainingTotal = totalVol;

    if (totalVol < 350) {
      for (let i = 0; i < numberOfEntries; i++) {
        console.log(totalVol);
        // Generate a random value between 5 and 20 that is a multiple of 1.44.
        const candidateValue = (Math.floor(Math.random() * 7) + 2) * 1.44;

        // Ensure the candidate value doesn't exceed the remaining total.
        if (candidateValue <= remainingTotal) {
          entries.push(candidateValue.toFixed(2));
          remainingTotal -= candidateValue;
        } else {
          // If the candidate value exceeds the remaining total, add the remaining total as the last entry.
          entries.push(remainingTotal.toFixed(2));

          break;
        }
      }
    } else {
      for (let i = 0; i < numberOfEntries; i++) {
        console.log(totalVol);
        // Generate a random value between 5 and 20 that is a multiple of 1.44.
        const candidateValue = (Math.floor(Math.random() * 15) + 5) * 1.44;

        // Ensure the candidate value doesn't exceed the remaining total.
        if (candidateValue <= remainingTotal) {
          entries.push(candidateValue.toFixed(2));
          remainingTotal -= candidateValue;
        } else {
          // If the candidate value exceeds the remaining total, add the remaining total as the last entry.
          entries.push(remainingTotal.toFixed(2));

          break;
        }
      }
    }

    return entries;
  };

  function splitEntry(entry) {
    // Create three multiplicative factors for each entry
    const factors = [];
    {
      // Generate a random factor between 0.15 and 0.3
      //const factor1 =  (Math.random() * 0.15 + 0.15).toFixed(2);
      const factor1 = (Math.random() * (0.2 - 0.15) + 0.15).toFixed(2);

      // Ensure that the factor is not greater than the remaining entry value
      const remainingval = entry / factor1;
      factors.push(factor1);
      const length = (Math.random() * 12 + 3).toFixed(1);
      factors.push(length);
      const breadth = remainingval / length;
      factors.push(breadth.toFixed(1));
    }
    return factors;
  }

  const generatedEntries = generateEntries(totalVol, 200);
  const sumOfEntries = generatedEntries.reduce(
    (total, entry) => total + parseFloat(entry),
    0
  );
  return (
    <div>
      <h2>Generated Entries:</h2>

      {/*  <ul>   
              {generatedEntries.map((entry, index) =>
              {
                  const a = splitEntry(entry);
                  return (<li key={index}>Entry {index + 1}: {entry} :----- {a[0]} &nbsp; *&nbsp;{a[1]}   &nbsp;  * &nbsp; {a[2] } &nbsp; --- person --{(entry/1.44).toFixed(1)} </li>)
              }
        )}
          </ul> */}

      <table style={{ borderCollapse: "separate", borderSpacing: "10px" }}>
        <thead>
          <tr>
            <th>Entry</th>
            <th>length</th>
            <th>breadth</th>
            <th>depth</th>

            <th> Volume </th>
            <th>Person</th>
          </tr>
        </thead>
        <tbody>
          {generatedEntries.map((entry, index) => {
            const factors = splitEntry(entry);

            const person = (entry / 1.44).toFixed(1);

            return (
              <tr key={index}>
                <td> {index + 1}</td>
                <td>{factors[1]}</td>
                <td>{factors[2]}</td>
                <td>{factors[0]}</td>

                <td>{entry}</td>
                <td> {person}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <p>Sum of Entries of vol: {sumOfEntries}</p>
      <p style={{ color: "blueviolet", fontFamily: "cursive" }}>
        Total vol: (left amount/ one day wage ): - : {totalVol}
      </p>
    </div>
  );
}

export default EntryGenerator;

/* function EntryGenerator({ totalVol }) {
  const generateEntries = (total) => {
    const entries = [];
    let remainingTotal = total;

    while (remainingTotal > 0) {
      // Generate a random value between 5 and 20.
      const entryValue = Math.random() * (20 - 5) + 5;
      console.log('inside whlie loop')
      // Ensure the entry doesn't exceed the remaining total.
      if (entryValue <= remainingTotal) {
        entries.push(entryValue);
        remainingTotal -= entryValue;
        }
        if (remainingTotal < 5) {
        entries.push(remainingTotal);
        remainingTotal -= remainingTotal;
        
    }
    }

    return entries;
  };

  const generatedEntries = generateEntries(totalVol);

  return (
    <div>
      <h2>Generated Entries:</h2>
      <p>Total Value: {totalVol}</p>
      <ul>
        {generatedEntries.map((entry, index) => (
          <li key={index}>Entry {index + 1}: {entry.toFixed(2)}</li>
        ))}
      </ul>
    </div>
  );
}

export default EntryGenerator; */

/* 
function EntryGenerator({ totalVol, }) {
  const generateEntries = (total) => {
    const entries = [];
    let remainingTotal = total;

    while (remainingTotal > 0) {
      // Generate a random value between 5 and 20 that is a multiple of 1.44.
      const candidateValue = (Math.floor(Math.random() * 11) + 5) * 1.4;

      // Ensure the candidate value doesn't exceed the remaining total.
      if (candidateValue <= remainingTotal) {
        entries.push(candidateValue);
        remainingTotal -= candidateValue;
      }
    }

    return entries;
  };

  const generatedEntries = generateEntries(totalVol);

  return (
    <div>
      <h2>Generated Entries:</h2>
      <p>Total Value: {totalVol}</p>
      <ul>
        {generatedEntries.map((entry, index) => (
          <li key={index}>Entry {index + 1}: {entry.toFixed(2)}</li>
        ))}
      </ul>
    </div>
  );
}

export default EntryGenerator; */

/* 
function generateEntries(targetNumber, numberOfEntries) {
  const entries = [];
  let remainingTotal = targetNumber;

  for (let i = 0; i < numberOfEntries; i++) {
    // Generate a random value between 5 and 20 that is a multiple of 1.44.
    const candidateValue = (Math.floor(Math.random() * 11) + 5) * 1.44;

    // Ensure the candidate value doesn't exceed the remaining total.
    if (candidateValue <= remainingTotal) {
      entries.push(candidateValue);
      remainingTotal -= candidateValue;
    } else {
      // If the candidate value exceeds the remaining total, add the remaining total as the last entry.
      entries.push(remainingTotal);
      break;
    }
  }

  return entries;
}

// Example usage:
const targetNumber = 100; // Set your target number
const numberOfEntries = 5; // Set the number of entries you want
const generatedEntries = generateEntries(targetNumber, numberOfEntries);

console.log('Generated Entries:', generatedEntries);
 */
/* function EntryGenerator({ totalVol, numberOfEntries }) {
  const entries = [];
  let remainingTotal = totalVol;

  for (let i = 0; i < numberOfEntries; i++) {
    // Generate a random value between 5 and 20 that is a multiple of 1.44.
    const candidateValue = (Math.floor(Math.random() * 11) + 5) * 1.44;

    // Ensure the candidate value doesn't exceed the remaining total.
    if (candidateValue <= remainingTotal) {
      entries.push(candidateValue);
      remainingTotal -= candidateValue;
    } else {
      // If the candidate value exceeds the remaining total, add the remaining total as the last entry.
      entries.push(remainingTotal);
      break;
    }
  }

  return entries;
}

 const generatedEntries = generateEntries(totalVol);

  return (
    <div>
      <h2>Generated Entries:</h2>
      <p>Total Value: {totalVol}</p>
      <ul>
        {generatedEntries.map((entry, index) => (
          <li key={index}>Entry {index + 1}: {entry.toFixed(2)}</li>
        ))}
      </ul>
    </div>
  );

*/
