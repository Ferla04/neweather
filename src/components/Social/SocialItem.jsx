export function SocialItem ({ name, github, linkedin }) {
  return (
    <article>
      <p>{name}</p>
      <div>
        <a href={github} target='_blank' className='fa-brands fa-github' rel='noreferrer' />
        <a href={linkedin} target='_blank' className='fa-brands fa-linkedin' rel='noreferrer' />
      </div>
    </article>
  )
}
