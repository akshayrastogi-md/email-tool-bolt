import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Box, Paper, Typography, Button } from '@mui/material';

interface TemplateElement {
  id: string;
  type: 'text' | 'image' | 'button';
  content: string;
}

const EmailTemplateBuilder: React.FC = () => {
  const [elements, setElements] = useState<TemplateElement[]>([]);

  const onDragEnd = (result: any) => {
    if (!result.destination) {
      return;
    }

    const newElements = Array.from(elements);
    const [reorderedItem] = newElements.splice(result.source.index, 1);
    newElements.splice(result.destination.index, 0, reorderedItem);

    setElements(newElements);
  };

  const addElement = (type: 'text' | 'image' | 'button') => {
    const newElement: TemplateElement = {
      id: `element-${elements.length + 1}`,
      type,
      content: type === 'text' ? 'New text element' : type === 'image' ? 'https://via.placeholder.com/150' : 'Click me',
    };
    setElements([...elements, newElement]);
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Email Template Builder
      </Typography>
      <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
        <Button variant="outlined" onClick={() => addElement('text')}>Add Text</Button>
        <Button variant="outlined" onClick={() => addElement('image')}>Add Image</Button>
        <Button variant="outlined" onClick={() => addElement('button')}>Add Button</Button>
      </Box>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="template">
          {(provided) => (
            <Paper
              {...provided.droppableProps}
              ref={provided.innerRef}
              sx={{ minHeight: 400, p: 2 }}
            >
              {elements.map((element, index) => (
                <Draggable key={element.id} draggableId={element.id} index={index}>
                  {(provided) => (
                    <Box
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      sx={{ mb: 2, p: 2, border: '1px dashed grey' }}
                    >
                      {element.type === 'text' && <Typography>{element.content}</Typography>}
                      {element.type === 'image' && <img src={element.content} alt="Template element" style={{ maxWidth: '100%' }} />}
                      {element.type === 'button' && <Button variant="contained">{element.content}</Button>}
                    </Box>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </Paper>
          )}
        </Droppable>
      </DragDropContext>
    </Box>
  );
};

export default EmailTemplateBuilder;
