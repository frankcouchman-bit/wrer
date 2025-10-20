export default function VisibleShell({ children }) {
  return (
    <div style={{fontFamily:'ui-sans-serif,system-ui'}}>
      <div style={{position:'sticky',top:0,background:'#fff',borderBottom:'1px solid #eee',padding:'10px 14px',zIndex:1000}}>
        <strong>SEOScribe</strong> — UI mounted
      </div>
      <div style={{padding:'20px 16px'}}>
        {children}
      </div>
    </div>
  );
}
