import MdiIcon from "@mdi/react"
import { cn } from "@/lib/utils"

interface MdiIconProps {
  path: string
  size?: number | string
  className?: string
  color?: string
  title?: string
}

/**
 * Wrapper around @mdi/react Icon for consistent sizing.
 * Default size is 1 (24px). Use className for Tailwind color.
 */
export function Icon({ path, size = 1, className, color, title }: MdiIconProps) {
  return (
    <MdiIcon
      path={path}
      size={size}
      className={cn("block", className)}
      color={color}
      title={title}
    />
  )
}
