const notify = (type, position = 'top-right') => { 
    console.log(type) 
    return () => { 
        switch (type) { 
            case 'info': toast.info('Hi! I am an info message!', { autoClose: 3000, position: position }); 
            break; 
            case 'success': toast.success('Hi! I am a success message', { position: position }); 
            break; 
            case 'warning': toast.warn('Hi! I am a warning message', { position: position }); 
            break; 
            case 'error': toast.error('Well, I am an error message', { position: position }); 
            break; 
            default: } 
        }; 
    } 