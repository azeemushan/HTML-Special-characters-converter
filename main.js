function convertHTML(str) {
  for(let i=0; i<str.length; i++){
    if(str[i]=='&'){
     str=str.slice(0,i)+"&amp;"+str.slice(i+1);
      i++;
      continue;
  }

  if(str[i]=='<'){
     str=str.slice(0,i)+"&lt;"+str.slice(i+1);
     i++;
      continue;
  }
  
  if(str[i]=='>'){
     str=str.slice(0,i)+"&gt;"+str.slice(i+1);
      console.log("updated: ");
      i++;
      continue; 
  }

  if(str[i]=='\"'){  
     str=str.slice(0,i)+"&quot;"+str.slice(i+1);
     i++;
     continue;
  }

  if(str[i]=='\''){   
     str=str.slice(0,i)+"&apos;"+str.slice(i+1);
      i++;
      continue;
  
  }
  }
  return str;
}

convertHTML('Stuff in "quotation marks"');
