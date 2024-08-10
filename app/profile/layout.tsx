export default function ProfileLayout({ children }: { children: React.ReactNode }) {
   return (
      <>
         <div style={{display: 'flex'}}>
            <div style={{border: '1px solid black'}}>Side Menu</div>
            {children}
         </div>
      </>
   );
}