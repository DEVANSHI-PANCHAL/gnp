import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

type Props = {
  images: string[]
  alt: string
  onSelect?: () => void
}

export default function HamperCarousel({ images, alt, onSelect }: Props) {
  if (!images.length) return null

  if (images.length === 1) {
    return (
      <div className="hamper-carousel">
        <img src={images[0]} alt={alt} onClick={onSelect} />
      </div>
    )
  }

  return (
    <Swiper
      className="hamper-carousel"
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      rewind
      slidesPerView={1}
      spaceBetween={0}
      onClick={(swiper, event) => {
        const target = event.target as HTMLElement
        if (target.closest('.swiper-button-prev, .swiper-button-next, .swiper-pagination')) return
        if (swiper.allowClick) onSelect?.()
      }}
    >
      {images.map((src, i) => (
        <SwiperSlide key={`${src}-${i}`}>
          <img src={src} alt={alt} draggable={false} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
