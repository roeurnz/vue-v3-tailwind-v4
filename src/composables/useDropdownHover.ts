import { ref, type Ref } from 'vue'

export interface DropdownHoverState {
  isOpen: Ref<boolean>
  hoverTimeout: Ref<number | null>
}

export interface DropdownHoverHandlers {
  openDropdown: () => void
  closeDropdown: () => void
  keepDropdownOpen: () => void
}

/**
 * Composable for managing hover-based dropdown state and behavior
 * Provides smooth, flicker-free hover interactions with proper timeout management
 */
export function useDropdownHover(): DropdownHoverState & DropdownHoverHandlers {
  const isOpen = ref(false)
  const hoverTimeout = ref<number | null>(null)

  const openDropdown = () => {
    // Clear any pending close timeout
    if (hoverTimeout.value) {
      clearTimeout(hoverTimeout.value)
      hoverTimeout.value = null
    }
    isOpen.value = true
  }

  const closeDropdown = () => {
    // Set a timeout to close the dropdown, allowing time to move to the dropdown content
    hoverTimeout.value = setTimeout(() => {
      isOpen.value = false
      hoverTimeout.value = null
    }, 100)
  }

  const keepDropdownOpen = () => {
    // Clear any pending close timeout when hovering over dropdown content
    if (hoverTimeout.value) {
      clearTimeout(hoverTimeout.value)
      hoverTimeout.value = null
    }
    isOpen.value = true
  }

  return {
    isOpen,
    hoverTimeout,
    openDropdown,
    closeDropdown,
    keepDropdownOpen,
  }
}