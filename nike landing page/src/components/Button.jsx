const Button = ({label, iconURL, bgClr, bdrClr, txtCl, fullWidth}) => {
  return (
    <button className={`flex justify-center items-center gap-2 px-7 py-2 border font-montserrat text-lg leading-none
      ${
        bgClr 
        ? `${bgClr} ${txtCl} ${bdrClr}`
        : "bg-coral-red  text-white border-coral-red"
      } rounded-full 
        ${fullWidth && `w-full`}
        `}>
      {label}
{/* if icon url present oonly then show image */}
      {iconURL && <img
        src={iconURL}
        alt="arrow right icon"
        className="ml-2 rounded-full w-5 h-5 "/>}
    </button>
  )
}

export default Button