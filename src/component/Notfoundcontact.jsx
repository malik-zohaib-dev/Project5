import HandsContact from '../../public/Handscontact.png'

const Notfoundcontact = () => {
  return (
    <div className="flex m-auto h-[80vh] gap-4 justify-center items-center">
        <img src={HandsContact} alt="" />
    <h3 className="text-white text-2xl font-semibold">Contact Not Found</h3>
    </div>
  )
}

export default Notfoundcontact