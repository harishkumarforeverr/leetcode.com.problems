const reverseTheList=(head)=>{
    let current=head;
    let next=null; 
    let previous=null;
    while(current!==null){
        next=current.next; 
        current.next=previous;  
        previous=current; 
        current=next;
    }
    return previous;
}
