const App = (props) => {
  const [isLoaded, setLoaded] = useState(false)
  const [{ param }, set] = useSpring(() => ({ param: 0 }))

  const onScroll = () => {
    let ratio = window.scrollY / window.innerHeight
    ratio = ratio > 1 ? 1 : ratio

    set({
      param: ratio,
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll)

    fetch('https://picsum.photos/200/300').then((pr) => {
      setLoaded(true)
    })

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <div style={containerStyle}>
      {isLoaded ? (
        <div style={style}>
          <animated.div
            style={{
              ...textStyle,
              opacity: param.interpolate({
                range: [0, 0.5, 0.75, 1],
                output: [0, 0.5, 0.75, 1],
              }),
              transform: param
                .interpolate({ range: [0, 0.5, 1], output: [-50, -25, 0] })
                .interpolate((x) => `translateX(${x}px)`),
            }}
          >
            Some text
          </animated.div>
        </div>
      ) : (
        <span />
      )}
    </div>
  )
}
