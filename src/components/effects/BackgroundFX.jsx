import { motion } from 'framer-motion'
export default function BackgroundFX(){return(<>
<motion.div className="pointer-events-none fixed -z-10 top-[-200px] right-[-200px] w-[520px] h-[520px] rounded-full bg-violet-400/25 blur-3xl" initial={{opacity:0,scale:.8}} animate={{opacity:1,scale:1}} transition={{duration:.8}}/>
<motion.div className="pointer-events-none fixed -z-10 bottom-[-220px] left-[-220px] w-[520px] h-[520px] rounded-full bg-fuchsia-400/20 blur-3xl" initial={{opacity:0,scale:.8}} animate={{opacity:1,scale:1}} transition={{duration:1}}/>
</>)}
