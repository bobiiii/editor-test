import { useCallback } from "react"

export const MenuBar = ({ editor }) => {
  const setLink = useCallback(() => {
    const previousUrl = editor.getAttributes('link').href
    const url = window.prompt('URL', previousUrl)

    if (url === null) {
      return
    }

    if (url === '') {
      editor.chain().focus().extendMarkRange('link').unsetLink().run()
      return
    }

    editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run()
  }, [editor])

  if (!editor) {
    return null
  }


  

  return (
    <div className="control-group">
  <div className="flex gap-4 flex-wrap">
    {/* buttons for LIST ITENS */}
    
    {/* <button
      onClick={() => editor.chain().focus().toggleBulletList().run()}
      className={`menu-button ${editor.isActive('bulletList') ? 'menu-button-active' : ''}`}
    >
      Toggle bullet list
    </button>

    <button
      onClick={() => editor.chain().focus().splitListItem('listItem').run()}
      className="menu-button"
      disabled={!editor.can().splitListItem('listItem')}
    >
      Split list item
    </button>

    <button
      onClick={() => editor.chain().focus().sinkListItem('listItem').run()}
      className="menu-button"
      disabled={!editor.can().sinkListItem('listItem')}
    >
      Sink list item
    </button>

    <button
      onClick={() => editor.chain().focus().liftListItem('listItem').run()}
      className="menu-button"
      disabled={!editor.can().liftListItem('listItem')}
    >
      Lift list item
    </button> */}

    <button
      onClick={setLink}
      className={`menu-button ${editor.isActive('link') ? 'menu-button-active' : ''}`}
    >
      Set link
    </button>

    <button
      onClick={() => editor.chain().focus().unsetLink().run()}
      className="menu-button"
      disabled={!editor.isActive('link')}
    >
      Unset link
    </button>

    <button
      onClick={() => editor.chain().focus().toggleBold().run()}
      className={`menu-button ${editor.isActive('bold') ? 'menu-button-active' : ''}`}
      disabled={!editor.can().chain().focus().toggleBold().run()}
    >
      Bold
    </button>

    <button
      onClick={() => editor.chain().focus().toggleItalic().run()}
      className={`menu-button ${editor.isActive('italic') ? 'menu-button-active' : ''}`}
      disabled={!editor.can().chain().focus().toggleItalic().run()}
    >
      Italic
    </button>

    <button
      onClick={() => editor.chain().focus().toggleStrike().run()}
      className={`menu-button ${editor.isActive('strike') ? 'menu-button-active' : ''}`}
      disabled={!editor.can().chain().focus().toggleStrike().run()}
    >
      Strike
    </button>

    <button
      onClick={() => editor.chain().focus().setParagraph().run()}
      className={`menu-button ${editor.isActive('paragraph') ? 'menu-button-active' : ''}`}
    >
      Paragraph
    </button>

    <button
      onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
      className={`menu-button ${editor.isActive('heading', { level: 1 }) ? 'menu-button-active' : ''}`}
    >
      H1
    </button>

    <button
      onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
      className={`menu-button ${editor.isActive('heading', { level: 2 }) ? 'menu-button-active' : ''}`}
    >
      H2
    </button>
    <button
      onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
      className={`menu-button ${editor.isActive('heading', { level: 3 }) ? 'menu-button-active' : ''}`}
    >
      H3
    </button>

    <button
      onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
      className={`menu-button ${editor.isActive('heading', { level: 4 }) ? 'menu-button-active' : ''}`}
    >
      H4
    </button>
    <button
      onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
      className={`menu-button ${editor.isActive('heading', { level: 5 }) ? 'menu-button-active' : ''}`}
    >
      H5
    </button>

    <button
      onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
      className={`menu-button ${editor.isActive('heading', { level: 6 }) ? 'menu-button-active' : ''}`}
    >
      H6
    </button>

    <button
      onClick={() => editor.chain().focus().setHardBreak().run()}
      className="menu-button"
    >
      Hard break
    </button>

    <button
      onClick={() => editor.chain().focus().undo().run()}
      className="menu-button"
      disabled={!editor.can().chain().focus().undo().run()}
    >
      Undo
    </button>

    <button
      onClick={() => editor.chain().focus().redo().run()}
      className="menu-button"
      disabled={!editor.can().chain().focus().redo().run()}
    >
      Redo
    </button>
  </div>
</div>

  )
}
