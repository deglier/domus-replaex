export default function SpaceAngled(props) {
  return (
    <div className={props.className}>
      <svg viewBox="0 0 1367 80" className="relative hidden sm:block " fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M1367 80V0.5L0 80H1367Z" fill="currentColor"/>
      </svg>
      <svg viewBox="0 0 360 80" fill="none" className=" sm:hidden relative " xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M360 80.5V0.5L0 80.5H360Z" fill="currentColor"/>
      </svg>
    </div>
  )
}