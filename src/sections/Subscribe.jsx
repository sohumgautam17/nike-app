import Button from '../components/Button'

const Subscribe = () => {
    return (
        <section className='my-16'>
            <h1 className='text-center text-4xl font-bold mb-10 font-palanquin'>
                Sign Up for <span className='text-coral-red'>Updates</span> & Newsletter
            </h1>

            <div className="flex justify-between border border-gray-300 rounded-full overflow-hidden">
                <input
                    type="text"
                    placeholder="subscribe@nike.com"
                    className='ml-12 w-[85%] focus:outline-none'
                />
                <Button
                    label="Sign Up"
                    backgroundColor="bg-coral-red"
                    textColor="text-white"
                />
            </div>
        </section>
    )
}

export default Subscribe;