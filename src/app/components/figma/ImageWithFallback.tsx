import React, { useEffect, useState } from 'react'

const ERROR_IMG_SRC =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg=='

function getImageCandidates(src: string) {
  if (src.startsWith('data:') || src.startsWith('blob:')) {
    return [src]
  }

  const candidates = new Set<string>([src])
  const fileIdFromPath = src.match(/\/file\/d\/([^/]+)/i)?.[1]
  const fileIdFromQuery = src.match(/[?&]id=([^&]+)/i)?.[1]
  const fileId = fileIdFromPath ?? fileIdFromQuery

  if (fileId) {
    candidates.add(`https://drive.google.com/uc?export=view&id=${fileId}`)
    candidates.add(`https://drive.google.com/uc?export=download&id=${fileId}`)
    candidates.add(`https://lh3.googleusercontent.com/d/${fileId}=w1000`)
  }

  return Array.from(candidates)
}

export function ImageWithFallback(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  const [didError, setDidError] = useState(false)
  const [candidateIndex, setCandidateIndex] = useState(0)

  const { src, alt, style, className, ...rest } = props
  const imageCandidates = typeof src === 'string' ? getImageCandidates(src) : []
  const currentSrc = imageCandidates[candidateIndex] ?? src

  useEffect(() => {
    setDidError(false)
    setCandidateIndex(0)
  }, [src])

  const handleError = () => {
    const nextIndex = candidateIndex + 1

    if (nextIndex < imageCandidates.length) {
      setCandidateIndex(nextIndex)
      return
    }

    if (typeof currentSrc === 'string') {
      console.warn('No se pudo cargar la imagen:', currentSrc)
    }

    setDidError(true)
  }

  return didError ? (
    <div
      className={`inline-block bg-rosasuave text-center align-middle ${className ?? ''}`}
      style={style}
    >
      <div className="flex items-center justify-center w-full h-full">
        <img src={ERROR_IMG_SRC} alt="Error loading image" {...rest} data-original-url={currentSrc} />
      </div>
    </div>
  ) : (
    <img src={currentSrc} alt={alt} className={className} style={style} {...rest} onError={handleError} />
  )
}
