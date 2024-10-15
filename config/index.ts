export const PROJECT_CATEGORIES = [
    {
      label: 'APIs',
      value: 'apis' as const,
      featured: [
        {
          name: 'Trending APIs',
          href: `/projects?category=apis`,
          imageSrc: '/nav/ui-kits/mixed.jpg',
        },
        {
          name: 'Recently Added',
          href: '/projects?category=apis&sort=desc',
          imageSrc: '/nav/ui-kits/blue.jpg',
        },
      ],
    },
    {
      label: 'Web Applications',
      value: 'web-apps' as const,
      featured: [
        {
            name: 'Trending Web Apps',
            href: `/projects?category=web-apps`,
            imageSrc: '/nav/ui-kits/mixed.jpg',
          },
          {
            name: 'Recently Added',
            href: '/projects?category=web-apps&sort=desc',
            imageSrc: '/nav/ui-kits/blue.jpg',
          },
      ],
    },
    {
        label: 'Mobile Applications',
        value: 'mobile-apps' as const,
        featured: [
          {
              name: 'Trending Mobile Apps',
              href: `/projects?category=mobile-apps`,
              imageSrc: '/nav/ui-kits/mixed.jpg',
            },
            {
              name: 'Recently Added',
              href: '/projects?category=mobile-apps&sort=desc',
              imageSrc: '/nav/ui-kits/blue.jpg',
            },
        ],
      },
  ]