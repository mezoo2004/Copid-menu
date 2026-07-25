export type AllergenInfo = {
  icon: string
  name: string
  description: string
}

export const allergens: AllergenInfo[] = [
  {
    icon: '🥛',
    name: 'الحليب',
    description:
      'يحتوي على الحليب أو مشتقاته مثل الجبن، الزبدة، الكريمة والصلصات.',
  },
  {
    icon: '🧀',
    name: 'الألبان',
    description: 'قد تحتوي بعض المنتجات على مكونات ألبان أو مشتقاتها.',
  },
  {
    icon: '🌾',
    name: 'الجلوتين',
    description: 'يوجد في خبز البرجر، البقسماط، وبعض الصلصات.',
  },
  {
    icon: '🥚',
    name: 'البيض',
    description: 'يوجد في المايونيز وبعض الصلصات والتتبيلات.',
  },
  {
    icon: '🌱',
    name: 'السمسم',
    description: 'قد يوجد في خبز البرجر أو بعض الصلصات.',
  },
  {
    icon: '🟡',
    name: 'الخردل',
    description: 'قد يوجد في بعض الصلصات والتتبيلات.',
  },
  {
    icon: '🫘',
    name: 'الصويا',
    description: 'قد توجد في الصلصات، تتبيلات اللحم، أو بعض المكونات المصنعة.',
  },
  {
    icon: '🔥',
    name: 'الفلفل الحار',
    description: 'بعض المنتجات تحتوي على الهالبينو أو صلصات حارة.',
  },
]

export const allergensTitle = 'مسببات الحساسية'

export const allergensSubtitle =
  'يرجى إبلاغ فريق العمل في حال وجود أي حساسية غذائية قبل الطلب.'

export const allergensNote =
  'قد يحدث انتقال غير مقصود لمسببات الحساسية أثناء التحضير، لذلك لا يمكننا ضمان خلو أي منتج منها بنسبة 100%.'
