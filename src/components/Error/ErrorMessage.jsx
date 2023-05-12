import './ErrorMessage.css'

export function ErrorMessage ({ problem = 'Non-existent city' }) {
  return <div className='error'><p>{problem}</p></div>
}
