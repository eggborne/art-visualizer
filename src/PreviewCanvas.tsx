import './PreviewCanvas.css';

interface PreviewCanvasProps {
  dimensions: { width: number; height: number };
}


const PreviewCanvas: React.FC<PreviewCanvasProps> = (props) => (
  <div style={{
    height: '90vw',
    aspectRatio: (props.dimensions.width / props.dimensions.height)
  }} className='preview-canvas'>
    <div className='texture-field'>I am a texture-field</div>
    
  </div>
);

export default PreviewCanvas;

