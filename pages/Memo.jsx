import React, { useMemo,useState } from 'react'

function Memo() {

    const [number, setNumber] = useState(1)

    function isPrime(number) {
        if (number <= 1) {
            return false;
        }
        if (number <= 3) {
            return true;
        }
        if (number % 2 === 0 || number % 3 === 0) {
            return false;
        }
        for (let i = 5; i * i <= number; i += 6) {
            if (number % i === 0 || number % (i + 2) === 0) {
                return false;
            }
        }
        return true;
    }


    const primeNumber = useMemo(() => {
        const Primes = []
        for (let i = 1; i < number; i++) {
            if (isPrime(i))
                Primes.push(i)
    }
        return Primes
    }, [])
    return (
        <div>
            <input type="number" name="" id="" className='text-red-500 '
            onChange={e => setNumber(e.target.value)} />
            <p>Prime Numbers between 0 and {number} are </p>
            { primeNumber.map(x=> <p className='text-orange-500'> x </p>)}
            <p>hola</p>

        </div>
    )
}

export default Memo