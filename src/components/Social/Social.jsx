import { DEVS } from '../../contants'
import { SocialItem } from './SocialItem'
import './Social.css'

export function Social () {
  return (
    <aside>
      <div className='contact'><h3>CONTACT</h3></div>
      <section className='contactItems'>
        {
          DEVS.map(dev => (
            <SocialItem key={dev.name} {...dev} />
          ))
        }

      </section>
    </aside>
  )
}
