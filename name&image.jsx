const user = {
  name: 'Piyush Singanjude',
  imageUrl: 'https://skillicons.dev/icons?i=react',
  imageSize: '90',
}

export default function profile() {
  return(
    <>
      <h1>{user.name}</h1>
      <img 
      className="Avatar"
      src={user.imageUrl}
      alt={'photo of'+ user.name}
      style={{
        width: user.imageSize,
        height: user.imageSize,
      }}
      />
    </>
  )
}