import axios from 'axios';
import { useState } from 'react';

function App() {
	const [id, setid] = useState<any>();
	const [advice, setAdvice] = useState<any>();

	const fetchQuote = () => {
		axios.get('https://api.adviceslip.com/advice').then((response) => {
			setid(response.data.slip.id);
			setAdvice(response.data.slip.advice);
		});
	};

	return (
		<div className='w-screen h-screen bg-zinc-900 flex justify-center items-center'>
			<section className='w-fit h-fit p-10 bg-zinc-700 rounded-md flex flex-col items-center justify-center gap-10'>
				<h5 className='text-pink-400'>Advice #{id}</h5>
				{advice ? (
					<div className='flex flex-col justify-center items-center'>
						<article className='text-white font-light px-10 text-center'>
							{advice}
						</article>
						<button
							title='Copy to clipboard'
							className='hover:shadow-2xl m-2'
							onClick={() => {
								navigator.clipboard.writeText(advice);
							}}
						>
							<img src='./images/icon-copy.svg' alt='Copy' />
						</button>
					</div>
				) : (
					<div>
						<h1 className='text-gray-500'>
							Click on the dice to generate a random advice
						</h1>
					</div>
				)}
				<button
					className='bg-pink-400 p-5 rounded-full hover:bg-pink-500 hover:shadow-2xl hover:animate-spin'
					onClick={fetchQuote}
					title='Generate Quote'
				>
					<img src='./images/icon-dice.svg' alt='dice' />
				</button>
			</section>
		</div>
	);
}

export default App;

