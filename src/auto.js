function leer_comando(com){
    let dim = leer_dimension(com)
    let posi = leer_pos_inicial(com)
    let inst = leer_instrucciones(com)

    let val_dim = /^\d+,\d+$/
    let val_posi = /^\d+,\d+[NSEO]$/
    let val_inst = /^[AID]+$/

    if (val_dim.test(dim) && val_posi.test(posi) && val_inst.test(inst))
        return true
    else
        return false
}

function leer_dimension(com){
    let slash = com.indexOf('/')
    return com.slice(0,slash)
}

function leer_pos_inicial(com){
    let slash1 = com.indexOf('/') + 1;
    let slash2 = com.indexOf('/',4);
    return com.slice(slash1, slash2);
}

function leer_instrucciones(com){
    let slash = com.lastIndexOf('/')
    return com.slice(slash + 1)
}

export {leer_comando, leer_dimension, leer_pos_inicial, leer_instrucciones}