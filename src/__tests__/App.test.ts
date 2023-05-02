import { vi, expect } from 'vitest'
import { render } from '@testing-library/vue'
import { createPinia, setActivePinia, type Pinia } from 'pinia'
import { createRouter, createWebHistory, type Router } from 'vue-router'
import App from '@/App.vue'
import { routes } from '@/router'

describe('App', () => {
  let router: Router
  let store: Pinia

  beforeEach(() => {
    store = createPinia()
    setActivePinia(store)

    router = createRouter({
      history: createWebHistory(),
      routes
    })
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  it('should start to load a project list from an API', () => {
    global.fetch = vi.fn().mockResolvedValueOnce({
      json: () => {
        return Promise.resolve({
          projects: []
        })
      }
    })

    render(App, {
      global: {
        plugins: [store, router]
      }
    })

    expect(global.fetch).toHaveBeenCalledTimes(1)
    // @ts-expect-error
    expect(global.fetch.mock.calls[0][0]).toContain('/api/projects')
  })
})
