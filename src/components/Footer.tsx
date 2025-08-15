import { NavLink } from "react-router-dom"
type FootTypes = {
  label: string
  path: string
}

const links: FootTypes[] = [
  { label: 'Home', path: '/' },
  { label: 'Shop', path: '/shop' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
]
const help: FootTypes[] = [
  { label: 'Payment Options', path: '/payment' },
  { label: 'Returns', path: '/returns' },
  { label: 'Privacy Policies', path: '/privacyPolicies' },]


const Footer = () => {
  return (
    <footer className='fixed bottom-0 border-t-1 border-gray-400 w-full sm:max-h-[505px] flex justify-center items-center sm:p-[50px] lg:p-[100px]'>
      <div className="md:h-[419px] w-full flex flex-col justify-between">
        <section className="flex justify-around items-center ">
          <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-2 gap-y-4 max-sm:my-4">
            <div>
              <div className="mb-4">
                <h2>Funiro</h2>
              </div>
              <p> 200 University Drive Suite 200 Coral Gables</p>
              <p>FL 33134 USA</p>
            </div>
            {/* links */}
            <div>
              <dl className="grid gap-6 font-semibold">
                <dt className="text-gray-500 ">Links</dt>
                {links.map((link) => (
                  <dd key={link.label}>
                    <NavLink to={link.path}>{link.label}</NavLink>
                  </dd>
                ))}
              </dl>
            </div>
            {/* help */}
            <div>
              <dl className="grid gap-6 font-semibold">
                <dt className="text-gray-500 ">Help</dt>
                {help.map((link) => (
                  <dd key={link.label}>
                    <NavLink to={link.path}>{link.label}</NavLink>
                  </dd>
                ))}
              </dl></div>
            {/* newsletter */}
            <div>
              <p className="text-gray-500 font-semibold">Newsletter</p>
              <form>
                <div className='flex gap-2'>
                  <input placeholder="Enter Your Email Adress" type="email" className="border-b border-black" />
                  <button type="submit" className="border-b font-semibold">Subscribe</button>
                </div>
              </form>
            </div>
          </div>
        </section>
        <section className="border-t-1 border-gray-400">
          <div className="h-[59px] p-4 flex justify-between items-center">
            <p>{new Date().getFullYear()}. All rights reverved</p>
          </div>
        </section>
      </div>
    </footer>
  )
}

export default Footer