import { forwardRef } from 'react';
import { useTranslation } from 'react-i18next';

export const About = forwardRef<HTMLElement>((props, ref) => {
  const { t } = useTranslation()
  return(
    <section ref={ref} className='flex h-[700px] items-center'>
      <div className="flex flex-col w-full h-80 lg:justify-center bg-[#262626] p-12 lg:px-24 text-white gap-5">
        <span className="font-bold text-base lg:text-2xl">{t('Mais sobre mim')}</span>
        <p className="text-xs lg:text-xl text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec commodo velit. 
          Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
          Maecenas nec elit eu lorem tempus mattis. Etiam gravida eros in consequat mollis. 
          Pellentesque venenatis nisl nec metus volutpat, quis tristique nisi euismod. 
          Vestibulum congue, odio in volutpat ultricies, sapien leo tempus nisi, eget congue lacus nibh vehicula ligula. 
          Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla in elementum sem.
        </p>
      </div>
    </section>
  )
})